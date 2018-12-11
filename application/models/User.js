  var timestamps = require('mongoose-timestamp');

 var UserSchema = new mongooseSchema({
	firstName: {
		type: String,
		default: '',
		required: true,
		trim: true,
        validate: [stringNotNull, "First name is required."]
	},
    lastName: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
    email: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
    password: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
    salt:{
        type:String,
        default:'',
        required:true,
        trim:true
    },
    accountLocked:{
        type:Boolean,
        default:true,
        required:true,
        trim:true
    },
    isAccountActive:{
        type:Boolean,
        default:false,
        required:true,
        trim:true
    },
   created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

UserSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}



var User = mongoose.model('User', UserSchema);
module.exports = User
