
import { Header } from '/component/Header.jsx'
import { TheBody } from '/component/Body.jsx'
import { locationData } from '/component/data.js'

function App() {
  const locationElements = locationData.map((location) => {
    return  <TheBody 
        image= {{
          src: location.image.src,
          alt: location.image.alt
        }}
        city={location.city}
        site={location.site}
        date={location.date}
        text={location.text}
        link={location.link}
      />
  })

  console.log(locationElements);
  return (
    <>
      <Header />
      {locationElements}
    </>
  )
}

export { App };

// To make the code even shorter, I could delete all of the properties inside the <TheBody /> component and replace them with location = {location};
// The location here refers to each location data within the location array. To make this work as expected. The App component has to be modified too
// In the app component, ".location" must be added after the word 'props' inside every property using the props feature. Save changes and refresh page. 

// Another straightforward way to do it is to use the JavaScript array spread feature. Since the location data are objects within an array, we could 
// remove the ".location" added in relevant areas in the TheBody component and replace the location={location} with {...location} in the App component. It does the same thing. 