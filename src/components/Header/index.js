import React from "react";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";

import logo from "~/assets/logo-purple.svg";

// eslint-disable-next-line import/no-unresolved
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>
                Alessandro Gentil
                <Link to="/profile">Meu perfil</Link>
              </strong>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Alessandro Gentil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
