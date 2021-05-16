Feature: Survey with a QA. As a recruiter, I want to gather survey data To do more detailed QA analysis.

  Scenario Outline: Fill survey with required valid data

    Given I access the VV Test page
    And I access menu 'Survey - QA'
    When I fill in all required fields:
        | name  | lastName | email                      | confirmEmail              | phoneNumber   | age   | timeInQa          | whatYouLike   | whatToImprove | ProgrammingLanguage   | careerPlan                | 
        | Maria | Aguilera | marelynaguilera@gmail.com  | marelynaguilera@gmail.com | 0593999795423 | 32    | Menos de 5 anos   | Desafio       | Tecnico       | Python                | Testing my Career Plan    | 

    Then It should redirect to a success page
