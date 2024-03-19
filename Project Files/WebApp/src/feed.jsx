import Card from './card';
import { data } from './fraud_test'

const Feed = () => {

  return (
    <div>
      {data.map(item => (
        <div className="feed" key={item.trans_num}>
          <Card id={item.trans_num} data={item} />
        </div>
      ))}
    </div>

  );
};

export default Feed;
