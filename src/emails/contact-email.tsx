import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailProps = {
  email: string;
  message: string;
};
function ContactEmail({ email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from potential client or recruiter</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received following email from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {email}</Text>
              <Button>Send Email</Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactEmail;
