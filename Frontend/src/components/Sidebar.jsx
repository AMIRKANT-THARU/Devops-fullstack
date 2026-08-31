function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>🎓</span>
        <h2>EduSchool</h2>
      </div>

      <nav>
        <button className="nav-item active">
          🏠 Dashboard
        </button>

        <button className="nav-item">
          👨‍🎓 Students
        </button>

        <button className="nav-item">
          👨‍🏫 Teachers
        </button>

        <button className="nav-item">
          🏫 Classes
        </button>

        <button className="nav-item">
          📅 Attendance
        </button>

        <button className="nav-item">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;