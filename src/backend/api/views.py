import datetime
import jwt
from api.models import User
from CustomCode import auth,id_generator , password_hasher
from django.db.models import Sum
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend import settings



# Create your views here.
@api_view(['GET'])
def index(request):
    return_data = {
        "error" : "0",
        "message" : "Successful"
    }
    return Response(return_data)



@api_view(["POST"])
def user_registration(request):
    try:
        firstName = request.data.get('firstname',None)
        lastName = request.data.get('lastname',None)
        email = request.data.get('email',None)
        password = request.data.get('password',None)
        reg_field = [firstName,lastName,email,password]

        if not None in reg_field and not "" in reg_field:
            if  User.objects.filter(email =email).exists():
                return_data = {
                    "error": "1",
                    "message": "User Exists",
                }
            else:
                #generate user_id
                userRandomId = id_generator.alphanumeric(20)
                #encrypt password
                encryped_password = password_hasher.generate_password_hash(password)
                #Save user_data
                new_userData = User(user_id=userRandomId,firstname=firstName,lastname=lastName,
                                email=email , user_password=encryped_password)
                new_userData.save()
                timeLimit= datetime.datetime.now() + datetime.timedelta(minutes=1440) #set duration for token
                payload = {"user_id": f"{userRandomId}",
                           "exp":timeLimit}
                token = jwt.encode(payload,settings.SECRET_KEY)
                print(token)
                return_data = {
                    "error": "0",
                    "message": "The registration was successful, A verrification SMS has been sent",
                    "token": f"{token}",
                    "elapsed_time": f"{timeLimit}",
                    }
        else:
            return_data = {
                "error":"2",
                "message": "Invalid Parrameter"
            }
    except Exception as e:
        return_data = {
            "error": "3",
            "message": f"An error occured    {e}"
        }
    return Response(return_data)





#User login
@api_view(["POST"])
def user_login(request):
    print(request.data)
    try:
        email_phone = request.data.get("email",None)
        password = request.data.get("password",None)
        field = [email_phone,password]
        if not None in field and not '' in field:
                if User.objects.filter(email =email_phone).exists() == False:
                    return_data = {
                        "error": "1",
                        "message": "User does not exist"
                    }
                else:
                    user_data = User.objects.get(email=email_phone)
                    is_valid_password = password_hasher.check_password_match(password,user_data.user_password)
                    #Generate token
                    timeLimit= datetime.datetime.now() + datetime.timedelta(minutes=1440) #set limit for user
                    payload = {"user_id": f'{user_data.user_id}',
                               "exp":timeLimit}
                    token = jwt.encode(payload,settings.SECRET_KEY)
                    if is_valid_password:
                        return_data = {
                            "error": "0",
                            "message": "Successfull",
                            "token": token,
                            "token-expiration": f"{timeLimit}",
                            "user_details": [
                                {
                                    "firstname": f"{user_data.firstname}",
                                    "lastname": f"{user_data.lastname}",
                                    "email": f"{user_data.email}",
                                }
                            ]

                        }
                    else:
                        return_data = {
                            "error" : "1",
                            "message" : "Wrong Password"
                        }
        else:
            return_data = {
                "error" : "2",
                "message" : "Invalid Parameters"
                }
    except Exception as e:
        return_data = {
            "error": "3",
            "message": f"An error occured      {e}"
        }
    return Response(return_data)



@api_view(["GET"])
@auth.token_required
def user_profile(request,decrypedToken):
    try:
        userID = decrypedToken['user_id']
        UserInfo = User.objects.get(user_id=userID)
        return_data = {
            "error": "0",
            "message": "Successfull",
            "data": {
                "user_details": {
                    "first_name": f"{UserInfo.firstname}",
                    "last_name": f"{UserInfo.lastname}",
                    "email": f"{UserInfo.email}",
                    }
                }
            }
    except Exception:
        return_data = {
            "error": "3",
            "message": "An error occured"
        }
    return Response(return_data)
