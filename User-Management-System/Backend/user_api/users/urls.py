from django.urls import path
from .views import UserList, UserDetail

urlpatterns = [
    path('', UserList.as_view(), name='user-list'),
    path('<uuid:user_id>/', UserDetail.as_view(), name='user-detail'),
]
