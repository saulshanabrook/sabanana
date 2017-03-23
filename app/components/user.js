import React from 'react'

function NavBar (props) {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='#'>
            <img alt='Brand' src='img/logo.png' height='36px' />
          </a>
        </div>
        <div id='navbar' className='collapse navbar-collapse'>

          <form className='navbar-form navbar-left'>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Search' />
            </div>
          </form>
          <ul className='nav navbar-nav navbar-right'>

            <li><a href='#'>
              <span className='glyphicon glyphicon-cog' aria-hidden='true' />
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Tag ({name}) {
  return <a href='#'><em className='text-info'>{name}</em></a>
}

function Tags ({tags}) {
  return (
    <span className='tags'>
      {tags.map(Tag)}
    </span>
  )
}

function Post ({date, name, tags}) {
  return (
    <li><a><span className='text-muted'>{date}</span> {name}</a> <Tags tags={tags} /> </li>
  )
}

function Posts ({posts}) {
  return (
    <ul className='list-unstyled posts'>
      {posts.map(Post)}
    </ul>
  )
}

function Profile ({profile: {bio, avatar}, name, posts}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-4'>
          <div className='thumbnail'>
            <img src={avatar} />
            <div className='caption'>
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </div>
        <div className='col-xs-8'>
          <h2>Posts</h2>
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  )
}

const MOCK_DATA = {
  profile: {
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ligula ex, et elementum enim sagittis et. Cras cursus at eros a lacinia. Aliquam erat volutpat. Maecenas pulvinar malesuada quam eget tempus. Nulla egestas scelerisque sem consectetur ornare. Praesent suscipit tempor odio, luctus luctus est rhoncus nec. Vivamus dapibus urna sodales nunc posuere malesuada. Phasellus blandit tellus et augue cursus, eu ornare felis venenatis. Aenean cursus nisl a eros condimentum feugiat. Nullam iaculis dapibus ante, sed hendrerit elit molestie ac.',
    avatar: 'http://placehold.it/350x350'
  },
  name: 'Jennifer Blane',
  posts: [{
    date: 'February 1, 2017',
    name: 'Catan fun!',
    tags: [{
      name: 'board-games'
    }, {
      name: 'fun!'
    }]
  }, {
    date: 'February 23, 2017',
    name: 'yeah lots of sports i love sports',
    tags: [{
      name: 'good-old-times'
    }, {
      name: 'getting-down-to-it'
    }]
  }]
}

export default function User (props) {
  return (
    <div>
      <NavBar />
      <Profile {...MOCK_DATA} />
    </div>
  )
}
