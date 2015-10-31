//users = new Mongo.Collection('users');
Posts = new Mongo.Collection('posts');

if (Meteor.isClient) {

    Template.body.helpers({
        posts: function(){
            return Posts.find();
        }
    });
    //////////////////////////
    Template.body.events({
        'submit .new-resolution': function(event){//event contains all the data about the event with the class .new-resolution
            var title= event.target.post_title.value;
            var thebody = event.target.thebody.value;
            Posts.insert({
                title: title,
                returnBody: thebody,
                createdAt: new Date()
            });
            //clear the form now...
            event.target.title.value="";
            return false;
        }
    });

    Template.postsTemplate2.events({
        //for the check box. surely we will need this for something.
        'click .toggle-checked': function() {
            Posts.update(this._id, {$set: {checked: !this.checked}}); //so the checkbox shows up "not checked"
        },
        //to delete "this" post
        'click .delete': function() {
            Posts.remove(this._id);
        }
    });


///////////////////////////////////////////////////////////
    someData = "I'm someData, man. created with Javascript. I am just an example.";

    Template.body.helpers({
        ex1: function(){
            //return "I am from ex1";
            return someData;
        }
    });
//////////////////////////////////////////////////////////
}

















/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
