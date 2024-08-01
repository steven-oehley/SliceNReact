function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closerHour = 22;

  const isOpen = hour >= openHour && hour <= closerHour;

  if (!isOpen) {
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closerHour}:00
      </p>
    );
  }

  return (
    <footer className="footer">
      <div className="order">
        <p>We're open until {closerHour}:00. Come visit us or order online</p>
        <button className="btn">Order Online</button>
      </div>
    </footer>
  );
}
export default Footer;
