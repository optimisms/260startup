# SPCA Forms/Payment/Queue screens

## Description deliverable

### Elevator pitch

My mom is the president of our local SPCA, a non-profit dedicated to animal welfare. Like many non-profits, they are signicantly behind in technology because they simply lack have the funds to pay someone to create custom software or webpages for them. For example, at every event, all patrons must stand in line to fill out a paper form, then stand in another line to pay at a physical credit card machine or cash box, and then wait around for someone to call out their name. The organization pays for these paper forms to be printed (300 forms almost every week), and then they save them for multiple years for tax and grant purposes. There are thousands, maybe tens of thousands, of forms in my house and my mom can never find the ones she needs. Most of this could be simplified with a couple webpages: an online form that saves to a database of customers and pets and a live queue that notifies customers when they're next in line. 

### Design

![Mock](IMG_5879.jpg)

### Key features

- Secure login over HTTPS
- Allows customers to view their past records
- Form with text-entry boxes for paperwork
- A live queue tracking where each customer is in line
- Live notifications to the next three customers in the queue
- Database where customer/pet information is stored

There's other functionality I want to build out for this in real life, like a payment screen and a searchable database for admin, but I think I can meet all the requirements of the assignment without those so I will leave them out for now.


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Four HTML pages: one for login, one for record history, one for form entry, and one to show status in the queue.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, dynamic form updates (eg add another pet to the form), queue updates, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving user's record history
  - submitting form to database
  - updating queue status
- **DB** - Store customers and their pet information in database.
- **Login** - Register and login customers. Credentials securely stored in database. Can't submit a new form or view history unless authenticated.
- **WebSocket** - As the queue moves forward, the information is broadcast to all customers in line.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages that represent the ability to login, view history, view queue, and submit a new vaccine form.
- **Links** - The login page and new form page both automatically link to the history page. All pages contain links to all other pages to represent a future hamburger model; I may change this so that the Login does not include links to others and those are only visible once authenticated, but that might be more effort than it's worth.
- **Text** - The history page uses text to show previous records submitted by the user. The queue page uses text to represent the queue information.
- **Images** - There is an image of a dog on the login page.
- **Login** - The "new form" page has lots of input, mostly text boxes but also a set of radio buttons and checkboxes. Also the login page has input.
- **Database** - The history page represents data pulled from the database of users' previous records.
- **WebSocket** - The queue page uses websockets to update the queue live as users in the queue are sent into the clinic and removed from the queue.
