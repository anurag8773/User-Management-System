from django.http import JsonResponse

def error_middleware(get_response):
    def middleware(request):
        try:
            return get_response(request)
        except Exception as e:
            return JsonResponse({'error': 'Internal Server Error'}, status=500)
    return middleware
