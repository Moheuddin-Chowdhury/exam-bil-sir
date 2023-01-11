import 'bootstrap/dist/css/bootstrap.min.css';
import './bill.css';
import Table from './bill-paper-table';
import Fotor from './bill-paper-fotor';
function Bill() {
  return (
    <div className='container mt-4'>
      <div className='header d-flex flex-row justify-content-center'>
      <img  src={require('./img/bu.png')}  height={90} width={90} alt='Bu' />
      <ul className='pt-2 'style={{listStyleType: "none"}}>
        <li><h3>পরীক্ষা নিয়ন্ত্রকের অফিস</h3></li>
        <li>বরিশাল বিশবিদ্যালয় , বরিশাল -৮২০০</li>
        <li>ফোন : ০৪৩১২১৭৭৭৮০</li>
      </ul>
      </div>
      <hr/>
      <div className='body'>
        <h4 className='mb-5' style={{ textDecoration: 'underline',textAlign:'center'}}>পরীক্ষা সংক্রান্ত  পরিতোষিকের  বিল </h4>
        <div className='d-flex '>
          <label >বিল পেশককারীর নাম:
            <input style={{width:'450px'}} type={'text'} />
          </label>
          <label >পদবী :
            <input style={{width:'460px'}} type={'text'} />
          </label>
        </div>
         <div>
          <label>পূর্ণ  ঠিকানা :</label>
          <input style={{width:'92%'}}/>
         </div>
         <label className='mt-3'><b>পরীক্ষার  বিবরণ :</b></label>
         <div className='d-flex '>
          <label >বিভাগের  নাম :
            <input style={{width:'500px'}} type={'text'} />
          </label>
          <label >শ্রেণী :
            <input style={{width:'460px'}} type={'text'} />
          </label>
        </div>

        <div className='d-flex mb-5'>
          <label >শিক্ষাবর্ষ:
            <input style={{width:'315px'}} type={'text'} />
          </label>
          <label >বর্ষ:
            <input style={{width:'315px'}} type={'text'} />
          </label>
          <label >সেমিস্টার:
            <input style={{width:'315px'}} type={'text'} />
          </label>
        </div>

       < Table/>
         <Fotor/>
      </div>
      <div className='fotor'></div>

    </div>
  );
}

export default Bill;
