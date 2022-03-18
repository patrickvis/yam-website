import React, { useState } from "react";

export default function WhyJoinChapter() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="gray-bg incentive-section">
      <div className="container pb-5">
        <div>
          <button
            className={`incentive-list-btn${showList ? ' expand' : ''}`}
            type="button"
            onClick={() => setShowList((prevShowList) => !prevShowList)}
            tabIndex={0}
            aria-expanded={showList}
            aria-controls="incentive-list"
          >
            <span>Incentives to start your own Chapter</span>
          </button>
        </div>
        <ul
          className={`list-group list-group-flush incentive-list${showList ? ' expand' : ''}`}
          id="incentive-list"
        >
          <li className="list-group">Connect with artists around the world/networking opportunities</li>
          <li className="list-group">Get to work with an international 501(c)3 nonprofit organization</li>
          <li className="list-group">Exposure for your club/artists</li>
          <li className="list-group">First notice of our competitions and events (not currently a thing but we could implement it?)</li>
          <li className="list-group">Develop leadership skills and form bonds within your chapter</li>
          <li className="list-group">Work towards our mission of getting the arts to be taken more seriously and elevating young artists</li>
          <li className="list-group">Get support from our team/organization</li>
          <li className="list-group">Looks good on college applications!</li>
          <li className="list-group">YAM can provide small grants to get your chapter started</li>
        </ul>
      </div>
    </div>
  );
}
