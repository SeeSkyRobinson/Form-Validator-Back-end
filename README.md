Form Validator

https://form1-validator.herokuapp.com/

====ABOUT====

Each year the Australian Titles office makes $200,000,000 in revenue from requisitioning fees from their clients who have made clerical errors on forms attempting to be lodged. This proof-of-concept shows a technological solution to this problem. The web-app detects which Titles office form is uploaded and runs the appropriate tests to check for mistakes.

The web app is deployed on Heroku, built with Express and React. The proof-of-concept was completed over 4 days for the final project submission of General Assembly's Software Engineering Immersive Course.


====BUILD STATUS====

The POC is live, but development continues on GitHub: https://github.com/SeeSkyRobinson/Form-Validator-Back-end & https://github.com/SeeSkyRobinson/Form-Validator-Front-end.
Pipeline:
    * Additional tests
        - Address validation
        - Title reference and acn check (from pre-existing date)
        - Date's cant be in future
        - No unallowed character
        - Correct formatting of characters
        - Valid jps qualification
        - Lodger number must be a positive integer
    * Additional form support (currently only supports Form 1)
    * Improved UI
    * Preview of uploaded pdf

====CREDITS====

Cheers to DT and Kasun for saving my bacon with your apt tutoring on this project. 