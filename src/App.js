import React, { useState, useEffect } from 'react';
import {data} from "./stories"
import "./App.css"

function App() {
  const [storyData, setStoryData] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);

  useEffect(() => {
    // Simulating reading the JSON file
    const fetchData = async () => {
      try {
        setStoryData(data);
        setCurrentChapter(data.story.start);
      } catch (error) {
        console.error('Error fetching story data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChoiceClick = (goto) => {
    setCurrentChapter(goto);
  };

  if (!storyData || !currentChapter) {
    return <div>Loading...</div>;
  }

  const currentChapterData = (currentChapter in storyData.chapters) ? storyData.chapters.currentChapter : null;

  return (
    <div id='app'>
      {currentChapterData === null ? <div> <h1>Error 503: Service not Available</h1> <p> Custom Error Message from Developer: This story path is having issues loading, try a different one in the meantime! </p></div> : <div>
      <h1>{storyData.story.title}</h1>
      <h2>{currentChapterData.title}</h2>
      <p>{currentChapterData.text}</p>
      <div className="horizontal-options">
        {currentChapterData.choices.map((choice, index) => (
            <button onClick={() => handleChoiceClick(choice.goto)}>
              {choice.text}
            </button>
        ))}
      </div>
      </div>
      }
    </div>
  );
}

export default App;
