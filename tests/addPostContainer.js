if (Meteor.isClient) {


    Template.body.events({
        // TODO: change this class name to accurately describe
        'submit .new-resolution': function (event) {//event contains all the data about the event with the class .new-resolution
            var body1 = event.body.title.value;
           var title = event.target.bod.value;
            Posts.insert({
                title: title,
                body: body1,
                createdAt: new Date()
            });
            event.target.title.value = "";
            return false;
        }
    });

}