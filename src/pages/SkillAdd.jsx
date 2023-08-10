import { Formik, Form, Field, ErrorMessage } from "formik";
import React,{useState,useEffect} from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import SkillService from "../services/skillService";

export default function SkillAdd() {
  const initialValues = { title: "", value: 50 };
  const schema = Yup.object({
    title: Yup.string().required("Zorunlu Alan"),
    value: Yup.number().required("Zorunlu Alan"),
  });

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const skillService = new SkillService();
      const response = await skillService.getSkill();
      setSkills(response);
    } catch (error) {
      console.error('Yetenekler getirilirken hata:', error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const skillService = new SkillService();
      await skillService.addSkill(values);

      console.log('Yetenek başarıyla eklendi:', values);
      fetchSkills();
    } catch (error) {
      console.error('Yetenek eklenirken hata:', error);
    }
  };
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{ handleSubmit(values)}} >
        <Form className="ui form">
          <FormField>
           <Field  name="title" placeholder="Başlık"></Field>
           <ErrorMessage name="title" render={error=><Label pointing basic color="red" content={error}></Label>} ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="value" placeholder="Oran"></Field>
            <ErrorMessage name="value" render={error=><Label pointing basic color="red" content={error}></Label>} ></ErrorMessage>
          </FormField>
          <ErrorMessage name="value" ></ErrorMessage>
          <Button color="green" type="submit">Kaydet</Button>
        </Form>
      </Formik>
    </div>
  );
}
