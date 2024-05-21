import { useSelector } from 'react-redux';

function Account() {
  const data = useSelector((state) => state);

  return (
    <div>
      <h1 className="text-primary">Account Details</h1>
      <table className="table border border-black">
        <thead>
          <tr className='border border-black'>
            <th className='border border-black'>Name</th>
            <th className='border border-black'>Balance</th>
            <th className='border border-black'>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-black'>{data.name}</td>
            <td className='border border-black'>{data.balance}</td>
            <td className='border border-black'>{data.mobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Account;
