import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import { useState } from "react";

function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTab(index) {
    setActiveTab(index);
  }

  return (
    <div className="w-full mb-6">
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onActiveTab={handleActiveTab}
      />
      <TabContent sections={tabs[activeTab].sections} />
    </div>
  );
}

export default TabComponent;
