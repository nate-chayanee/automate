Feature: Test Scenario1 (TS_002)  Vendor สร้างการนัดหมาย
  Register student on registration page

  Background:user navigates to the website and login
    Given login by user is "panarat.cha@dohome.co.th" and password is "Panarat01*"
    When user click on login button
    Then user is on homepage

  @TC_1, @TS_002
  Scenario: Test Case1 (TC_1)Vendor สร้างการนัดหมาย
    When user click on create appointment button
    Then user is on createappointment page
    Given user input topic as "อื่นๆ"
    And user input date as "15/12/2021"
    And user input time as "บ่าย"
    And user input detail as "test by automation test"
    And user input type of product as "กลุ่มสินค้าท่อPVC"
    And user input dealer as "ผู้ผลิต"
    And user add file by "file_for_test/test1.jpg" path
    Then user click appointment button 
    And user click save button
    And user click accept




