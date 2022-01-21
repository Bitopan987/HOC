import React from 'react';
import EnhancedLikes from './LikesCount';
import EnhancedComments from './CommentsCount';

function App() {
  return (
    <div className="App">
      <EnhancedLikes />
      <EnhancedComments />
    </div>
  );
}

export default App;
