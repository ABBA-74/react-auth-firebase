import { Button, Card, Form } from 'react-bootstrap';
import { useRef } from 'react';

const Signup = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmationRef = useRef('');

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mt-3 mb-4'>Inscription</h2>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control type='email' id='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Label htmlFor='password'>Mot de passe</Form.Label>
              <Form.Control
                type='password'
                id='password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Label htmlFor='passwordConfirmation'>
                Confirmez le mot de passe
              </Form.Label>
              <Form.Control
                type='password'
                id='passwordConfirmation'
                ref={passwordConfirmationRef}
                required
              />
            </Form.Group>
            <Button variant='secondary' className='w-100 my-4' type='submit'>
              S&apos;inscrire
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Vous avez déjà un compte ? Connexion
      </div>
    </>
  );
};

export default Signup;
