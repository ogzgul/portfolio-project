import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D5635AQGP-5ueSdeA6A/profile-framedphoto-shrink_200_200/0/1677750609302?e=1692010800&v=beta&t=iVuNRfyypu-2gYYbgPDJwNi3bu2m983LWEQcG8uJJcs"
        />
        <Dropdown pointing="top left" text="Oğuz">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
