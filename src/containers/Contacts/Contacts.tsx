const Contacts = () => {
  return (
    <div>
      <div>
        <h3>Контакты</h3>
        <ul>
          <li>0505601100</li>
          <li>0225601100</li>
        </ul>
      </div>
      <div>
        <h2>Социальные сети:</h2>
        <div className="alert alert-danger" role="alert">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="nav-link"
          >
            Instagram
          </a>
        </div>
        <div className="alert alert-primary" role="alert">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="nav-link"
          >
            Facebook
          </a>
        </div>
        <div className="alert alert-primary" role="alert">
          <a href="https://telegram.org/" target="_blank" className="nav-link">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;