import Link from 'next/link';
import { Button, Title } from '../shared/styles/sharedstyles';

export default function ErrorPage() {
  return (
    <>
      <Title>Oops! Something went wrong</Title>
      <Link href={'/'}>
        <Button>Back Home</Button>
      </Link>
    </>
  );
}
