### Server info:  

Domain name: haileterry.com  
Public IP: 184.73.208.113  
SSH command: ssh -i ./JenkinsKeyPair.pem ubuntu@184.73.208.113

### Notes:
9/12 - I've already used GitHub a lot in the past so most of this was not new, but the GitLens feature on VSCode is very interesting and useful. It's similar to IntelliJ's GitHub features.

10/1 - If connecting to a new AWS EC2 instance isn't working, make sure you're using http and not https.

### CSS:
Selectors: . means class, # means id, x[y] means 'any x with attribute y', x:y is a psuedo selector like section:hover
| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

Flex: @media tag helps you specify if flex should be altered based on things like orientation or screen width
eg:
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}
