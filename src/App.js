 
function App() {
  return (
    <div className="container-flued text-center fs-5 ">
      <h2 className="fs-1 fw-bold ">FRIENDS NAME LIST TABLE</h2>
    < table className="table table-responsive table-striped table-bordered table-hover">
      
      <thead className="table-primary">
        <tr>
          <th>Srno</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Jobs</th>
          <th>Age</th>
          <th>City</th>
          <th>Photos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Java Developer</td>
          <td>25</td>
          <td>Nagpure,India</td>
          <th> <img src="./photo1.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Python Developer</td>
          <td>26</td>
          <td>pune, India</td>
          <th> <img src="./photo7.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>3</td>
          <td>Allen</td>
          <td>Smith</td>
          <td>PhP Developer</td>
          <td>27</td>
          <td>hydrabad, India</td>
          <th> <img src="./photo4.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>4</td>
          <td>Nelson</td>
          <td>Williams</td>
          <td>Front-end Devel</td>
          <td>25</td>
          <td>Dilhi, India</td>
          <th> <img src="./photo5.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>5</td>
          <td>John</td>
          <td>willay</td>
          <td>UI Designer</td>
          <td>24</td>
          <td>banglore, Karnataka</td>
          <th> <img src="./photo6.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>6</td>
          <td>Mary</td>
          <td>luee</td>
          <td>Data Scientist</td>
          <td>25</td>
          <td>hydrabad, India</td>
          <th> <img src="./photo3.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>7</td>
          <td>Mical</td>
          <td>Hasan</td>
          <td>Full-stack Developer</td>
          <td>29</td>
          <td>Chennai, India</td>
          <th> <img src="./photo12.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>8</td>
          <td>Wilson</td>
          <td>Azizi</td>
          <td>Digital Marketing</td>
          <td>30</td>
          <td>Mumbai .india</td>
          <th> <img src="./photo9.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>9</td>
          <td>David</td>
          <td>tesla</td>
          <td>Data Analitics</td>
          <td>26</td>
          <td>tamilnadu,India</td>
          <th> <img src="./photo10.jpg" alt="hb" width="80px" /></th>
        </tr>
        <tr>
        <td>10</td>
          <td>Thomas</td>
          <td>Wai</td>
          <td>Manager</td>
          <td>32</td>
          <td>kolkata, India</td>
          <th> <img src="./photo11.jpg" alt="hb" width="80px" /></th>
        </tr>
      </tbody>
    </table >

    
    </div>
    
  );
}

export default App;