import useCookieAuth from '../hooks/useCookieAuth';

function Home() {
  const { currentUser } = useCookieAuth();
  console.log(currentUser);

  return (
    <div className="texto">
      Bienvenido!
      {' '}
      {currentUser}
    </div>
  );
}
export default Home;
