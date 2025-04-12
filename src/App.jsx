import Header from "./components/Header"
import {  useState } from "react"
const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: 'Happy Meals',
    description: 'Discover the best foods in over 1,000 restaurants.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'Design',
    description:
      'A website to showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]
const tabsList = [
  { tabId: 'STATIC', displayText: 'Static' },
  { tabId: 'RESPONSIVE', displayText: 'Responsive' },
  { tabId: 'DYNAMIC', displayText: 'Dynamic' },
]
import "./index.css"

const App = () => {
  const [activeTab,setActiveTab]=useState(null)
  const handleActiveTab=(tab)=>{
    setActiveTab(tab)
  }
  const filteredProjects=activeTab?projectsList.filter(each=>each.category===activeTab):projectsList

  console.log(activeTab)
  return (
    <div className="app-container">
      <Header />
      <h1 className="title">Projects</h1>
      <div className="description-container">
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>
      </div>
      <ul className="tab-items">
        {tabsList.map(tab => (<li key={tab.tabId}>
          <button style={{backgroundColor:activeTab===tab.tabId?"green":""}} onClick={()=>handleActiveTab(tab.tabId)} className={`tab-btn`}>{tab.displayText}</button>
        </li>))}
      </ul>
      <div className="project-container">
        {filteredProjects.map(each=>(
          <div className="project" key={each.projectId}>
            <img className="project-image" src={each.imageURL} alt="" />
            <h2 className="project-title">{each.title}</h2>
            <p className="project-description">{each.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default App