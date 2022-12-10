import Link from 'next/link';
import { Button, Title } from '../shared/styles/sharedstyles';

export default function NotFound() {
  return (
    <>
      <Title>Oops! The page you are looking for cannot be found.</Title>
      <Link href={'/'}>
        <Button>Back Home</Button>
      </Link>
    </>
  );
}
