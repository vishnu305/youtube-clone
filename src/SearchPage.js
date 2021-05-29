import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage(){
  return (<div className="right">
          <div className="searchPage">
          <div className="searchPage_filter">
            <TuneOutlinedIcon />
            <h2>Filter</h2>
          </div>
          <hr />
          <ChannelRow
          image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Clever Programmer"
          verified
          subs="659k"
          noOfVideos={382}
          description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
          />
          <hr />
          <VideoRow
          views="1.4M"
          subs="659k"
          description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
          timestamp="59 seconds ago"
          channel="Clever Programmer"
          title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
          image="https://i.ytimg.com/an_webp/lUeS9Wsj6dk/mqdefault_6s.webp?du=3000&sqp=CKfpt4UG&rs=AOn4CLBjTM2GelbuWxOvOsijL-6sokPi-A"
           />
           <VideoRow
           views="1.4M"
           subs="659k"
           description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
           timestamp="59 seconds ago"
           channel="Clever Programmer"
           title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
           image="https://i.ytimg.com/an_webp/4nVDijlvVG0/mqdefault_6s.webp?du=3000&sqp=CNm7t4UG&rs=AOn4CLCIEz9esR7eMkgoCmk5Zvhi2EMw_g"
            />
            <VideoRow
            views="1.4M"
            subs="659k"
            description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
            image="https://i.ytimg.com/an_webp/xP3cxbDUtrc/mqdefault_6s.webp?du=3000&sqp=CI7rt4UG&rs=AOn4CLDJl1xuJT4mqpJYIX1qAm1QUv8GNg"
             />
             <VideoRow
             views="1.4M"
             subs="659k"
             description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
             timestamp="59 seconds ago"
             channel="Clever Programmer"
             title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
             image="https://i.ytimg.com/an_webp/-cMqr9HpZ-Y/mqdefault_6s.webp?du=3000&sqp=CPCBuIUG&rs=AOn4CLAGfo-Ph5fD6eo4Zc48HUWQIzLE7A"
              />
              <VideoRow
              views="1.4M"
              subs="659k"
              description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
              timestamp="59 seconds ago"
              channel="Clever Programmer"
              title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
              image="https://i.ytimg.com/an_webp/xsXxFBFCQKY/mqdefault_6s.webp?du=3000&sqp=CIjjt4UG&rs=AOn4CLABozXfKLFEUddqw3Jt_QiLvZtWlQ"
               />
               <VideoRow
               views="1.4M"
               subs="659k"
               description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
               timestamp="59 seconds ago"
               channel="Clever Programmer"
               title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
               image="https://i.ytimg.com/an_webp/QxVwBzZcaNs/mqdefault_6s.webp?du=3000&sqp=COzot4UG&rs=AOn4CLDu64OzS67bqtSdc9DUIacmSg66gw"
                />
                <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
                image="https://i.ytimg.com/an_webp/lDKoIEOWJiI/mqdefault_6s.webp?du=3000&sqp=CPr1t4UG&rs=AOn4CLBM8ixiheU2xC91D9X9Sl9OjgMpBw"
                 />
                 <VideoRow
                 views="1.4M"
                 subs="659k"
                 description="Do you want a FREE online coaching STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward..."
                 timestamp="59 seconds ago"
                 channel="Clever Programmer"
                 title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled)"
                 image="https://i.ytimg.com/an_webp/8BNA-N717A0/mqdefault_6s_480x270.webp?du=3000&sqp=CKP7t4UG&rs=AOn4CLD3SaUUrdS7vGY2CPTJIm3836H7_g"
                  />
    </div>
  </div>)
}
export default SearchPage;
