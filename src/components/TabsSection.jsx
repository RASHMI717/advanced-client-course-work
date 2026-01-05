import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabsSection({ property }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel>
        <p>{property.longDescription}</p>
      </TabPanel>

      <TabPanel>
        <img
          src={property.floorPlan}
          alt="Floor Plan"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </TabPanel>

      <TabPanel>
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          src={`https://maps.google.com/maps?q=${property.map.lat},${property.map.lng}&z=15&output=embed`}
        ></iframe>
      </TabPanel>
    </Tabs>
  );
}

export default TabsSection;
