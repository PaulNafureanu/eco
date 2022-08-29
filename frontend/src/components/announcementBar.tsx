import * as React from "react";
import "./../css/announcementBar.css";

interface AnnouncementBarProps {
  announcement: string;
}

const AnnouncementBar: React.FunctionComponent<AnnouncementBarProps> = ({
  announcement,
}) => {
  return (
    <div id="Announcement-bar">
      <h1>{announcement}</h1>
    </div>
  );
};

export default AnnouncementBar;
