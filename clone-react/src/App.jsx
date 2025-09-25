import React, {useState} from 'react'

function Sidebar({onSelect, active}){
  const items = ['Overview','Projects','Tasks','Team','Settings']
  return (
    <aside className="sidebar">
      <div className="brand">Task Dashboard</div>
      <nav>
        {items.map(i=> (
          <button key={i} className={i===active? 'active' : ''} onClick={()=>onSelect(i)}>{i}</button>
        ))}
      </nav>
      <div className="sidebar-footer">© 2024 Task Management Dashboard</div>
    </aside>
  )
}

export default function App(){
  const [active, setActive] = useState('Overview')
  return (
    <div className="app">
      <Sidebar onSelect={setActive} active={active} />
      <div className="main">
        <header className="topbar">
          <h1>Task Management Dashboard</h1>
          <div className="topbar-right">
            <input placeholder="Search" />
            <img className="avatar" src="https://react-components-project-seven.vercel.app/professional-headshot.png" alt="John" />
          </div>
        </header>
        <main className="content">
          <section className="stats">
            <div className="card"><h3>TOTAL TASKS</h3><p className="big">4</p><p className="muted">All tasks in the system</p></div>
            <div className="card"><h3>ACTIVE PROJECTS</h3><p className="big">3</p><p className="muted">Currently running projects</p></div>
            <div className="card"><h3>TEAM MEMBERS</h3><p className="big">4</p><p className="muted">People in your team</p></div>
            <div className="card"><h3>NOTIFICATIONS</h3><p className="big">3</p><p className="muted">Recent updates</p></div>
          </section>

          <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
              <article className="project"><h3>E-commerce Platform</h3><p>Building a modern online shopping experience</p><div className="meta">8 members • 2/15/2024</div></article>
              <article className="project"><h3>Mobile App</h3><p>Cross-platform mobile application development</p><div className="meta">5 members • 3/1/2024</div></article>
              <article className="project"><h3>Analytics Dashboard</h3><p>Real-time data visualization and reporting</p><div className="meta">3 members • 1/30/2024</div></article>
            </div>
          </section>

          <section className="recent">
            <div className="recent-tasks">
              <h2>Recent Tasks</h2>
              <ul>
                <li><strong>Design Homepage</strong><p>Create wireframes and mockups for the new homepage layout</p><div className="task-meta">Sarah Chen • 1/15/2024</div></li>
                <li><strong>Setup Database</strong><p>Configure PostgreSQL database and create initial schemas</p><div className="task-meta">Mike Johnson • 1/20/2024</div></li>
                <li><strong>Write Documentation</strong><p>Document API endpoints and component usage</p><div className="task-meta">Alex Rivera • 1/10/2024</div></li>
                <li><strong>Implement Authentication</strong><p>Add user login and registration functionality</p><div className="task-meta">Emma Davis • 1/25/2024</div></li>
              </ul>
            </div>

            <aside className="sidebar-widgets">
              <section className="widget team"><h3>Team Members</h3>
                <div className="member"><img src="https://react-components-project-seven.vercel.app/professional-woman-designer.png" alt="Sarah" /><div><strong>Sarah Chen</strong><div className="muted">UI/UX Designer</div></div></div>
                <div className="member"><img src="https://react-components-project-seven.vercel.app/professional-man-developer.png" alt="Mike" /><div><strong>Mike Johnson</strong><div className="muted">Backend Developer</div></div></div>
                <div className="member"><img src="https://react-components-project-seven.vercel.app/professional-person-writer.jpg" alt="Alex" /><div><strong>Alex Rivera</strong><div className="muted">Technical Writer</div></div></div>
                <div className="member"><img src="https://react-components-project-seven.vercel.app/professional-woman-developer.png" alt="Emma" /><div><strong>Emma Davis</strong><div className="muted">Frontend Developer</div></div></div>
              </section>
              <section className="widget notifications"><h3>Notifications</h3>
                <ul><li><strong>Task Completed</strong><div className="muted">Documentation finished by Alex Rivera • 2 hours ago</div></li>
                <li><strong>Deadline Approaching</strong><div className="muted">Homepage design due in 3 days • 4 hours ago</div></li>
                <li><strong>New Team Member</strong><div className="muted">Emma Davis joined the project • 1 day ago</div></li></ul>
              </section>
            </aside>
          </section>

        </main>
        <footer className="site-footer">Made for learning — clone example</footer>
      </div>
    </div>
  )
}
