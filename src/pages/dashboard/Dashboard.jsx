import React from 'react'
import './style.scss'
import Container from '../../components/container/Container'
const Dashboard = () => {
  return (
    <Container >
      <div className="myItems">
        <div className="myBox box1">
          <div className="title">Users</div>
          <div className="userList">
            <div className="userItem">
              <div className="userName">User 1</div>
              <div className="userEmail">anandraj.so@gmail.com</div>
            </div>
            <div className="userItem">
              <div className="userAvatar"></div>
              <div className="userName">User 1</div>
            </div>
            <div className="userItem">
              <div className="userAvatar"></div>
              <div className="userName">User 1</div>
            </div>
          </div>
        </div>
        <div className="myBox box2">Box2</div>
        <div className="myBox box3">Box3</div>
        <div className='myBox box4'>Box4</div>
        <div className='myBox box5'>Box5</div>
        <div className='myBox box6'>Box6</div>
      </div>
    </Container>
  )
}

export default Dashboard
