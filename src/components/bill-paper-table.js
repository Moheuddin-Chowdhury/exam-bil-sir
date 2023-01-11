import 'bootstrap/dist/css/bootstrap.min.css';
import './bill.css';

function Table(){
   return(
<div>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ক্র. নং </th>
      <th scope="col">কাজের নাম</th>
      <th scope="col">কোর্স নং</th>
      <th scope="col">কত ঘন্টার পরীক্ষা</th>
      <th scope="col">পূর্নপত্র /অর্ধপত্র</th>
      <th scope="col">সংখ্যা</th>
      <th scope="col">পারিশ্রমিকের হার</th>
      <th scope="col">টাকা</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>প্রশ্নপত্র প্রণয়ন (সেমিস্টার ফাইনাল)</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>প্রশ্নপত্র  প্রণয়ন (মিডটার্ম)</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>উত্তরপত্র মূল্যায়ন (সেমিস্টার ফাইনাল)</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>উত্তরপত্র মূল্যায়ন (মিডটার্ম)</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>প্রশ্নপত্র সমন্বয় সাধন</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>টিউটোরিয়াল/ক্লাস টেস্ট /কুইজ </td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>এসাইনমেন্ট</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td> প্রেজেন্টেশন</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td> মৌখিক পরীক্ষা</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>টেবুলেশন</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>ব্যাবহারিক পরীক্ষা</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>প্রশ্নপত্র কম্পোজ</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>টার্ম পেপার</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>প্রজেক্ট পেপার</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>প্রশ্নপত্র অনুবাদ</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">16</th>
      <td>ডাক মাশুল</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">17</th>
      <td>থিসিস /ইন্টার্নশীপ /মনোগ্রাফ</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
      <th scope="row">18</th>
      <td>বিবিধ  খরচ</td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td>
      <td><input/></td> 
      <td><input/></td>
    </tr>
    <tr>
   
      <td colspan="6"><span> কথায়:</span><input style={{width:'90%'}}/></td>
      <td><span>মোট = </span></td>
      <td><input/></td>
    </tr>
  </tbody>
</table>
</div>
   );
}
export default Table;