function Header() {
  return (
    <header className="header">

      <div>
        <h1>School Management</h1>
        <p>Manage your school from one dashboard.</p>
      </div>

      <div className="admin-profile">
        <div className="avatar">A</div>

        <div>
          <strong>Admin</strong>
          <p>Administrator</p>
        </div>
      </div>

    </header>
  );
}

export default Header;