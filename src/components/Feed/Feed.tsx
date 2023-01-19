import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import DescriptionIcon from '@mui/icons-material/Description';
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__create">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__options">
          <InputOption Icon={ImageIcon} title="Photo" color="378fe9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="5f9b41" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="c37d16" />
          <InputOption Icon={DescriptionIcon} title="Article" color="e16745" />
        </div>
      </div>
    </div>
  )
}

export default Feed