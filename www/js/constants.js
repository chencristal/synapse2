angular.module('starter')
	.constant('SERVER_URL', 
		'http://192.168.0.106/client/ASEngine/snapshot.php')
	.constant('AUTH_EVENTS', {
	  	notAuthenticated: 'auth-not-authenticated',
	  	notAuthorized: 'auth-not-authorized'
	})
	.constant('USER_ROLES', {
  		admin: 'admin_role',
	  	public: 'public_role'
	});