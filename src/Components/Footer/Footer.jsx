import { Container } from '../Layout/Container/Container.jsx';
import { Categories } from './Categories/Categories.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import s from './Footer.module.scss';
import { Development } from './Development/Development.jsx';
import { Socials } from './Socials/Socials.jsx';

export const Footer = () => (
  <footer>
    <Container className={s.container}>
      <Categories />
      <Contacts />
      <Socials />
      <Copyright />
      <Development />
    </Container>
  </footer>
)
