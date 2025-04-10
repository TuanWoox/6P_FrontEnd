import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import { useState } from "react";

function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* <TabContent sections={tabs[activeTab].sections} /> */}
    </div>
  );
}

export default TabComponent;
