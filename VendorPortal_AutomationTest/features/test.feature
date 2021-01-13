Feature: Test Scenario1 (TS_002)  Vendor สร้างการนัดหมาย
  Register student on registration page

  Scenario: Test Case1 (TC_1)Vendor สร้างการนัดหมาย
    Given I am in student registration page
    When I enter registered student ID
    And click Register Button
    Then I should see message "This student is already registered!"