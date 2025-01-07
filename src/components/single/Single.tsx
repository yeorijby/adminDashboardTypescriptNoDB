import { CartesianGrid, Tooltip, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './single.scss';

type Props = {
  id:number;
  img?:string;
  title:string;
  info:object;
  chart?:{
    dataKeys:{name:string; color:string};
    data : object[];
  }
  activities?:{time:string; text:string};
}

export const Single = (props:Props) => {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <h1>John Doe</h1>
            <button>UPDATE</button>
          </div>  
          <div className="details">
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>
          </div>  
        </div>  
        <hr/>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            > 
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip  />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>        
        </div>  
      </div>  
      <div className="activities">
        <h2>Last Activities</h2>
        <ul>
          <li>
            <div>
              <p> John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p> John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p> John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p> John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p> John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
        </ul>
      </div>  
    </div>
  )
}
