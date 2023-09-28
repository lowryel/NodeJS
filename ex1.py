class Jungle:
    def __init__(self, name="Unknown"):
        self.visitorName=name
    def welcomeMessage(self):
        return "Hello %s, Welcome to the Jungle" %self.visitorName

def main():

    j = Jungle("Eugene")
    assert(j)
    print(j.welcomeMessage())

    k = Jungle()
    print(k.welcomeMessage())

if __name__=="main":
    main()

#  decorator function
def decor(f):
    def wrapper(*args, **kwargs):
        print("hello Eugene")
        f(*args, **kwargs)
        print("hello Eugene, pleasure to meet you")
    return wrapper

@decor
def greet(greeting):
    print(greeting)


# result()

@decor
def hey(greeting):
    print(greeting)

if __name__=="__main__":
    greet("Greetings")
    hey("Hello Eugene, can I get you through?")


from functools import wraps
def acceptedRange(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if kwargs:
            return fn(*args, **kwargs)
    return wrapper

@acceptedRange
def greet(name):
    print("Hello", name)
greet(name="Thanasis")


def acceptedNum(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if kwargs:
            raise ValueError("Not allowed")
        return fn(*args, **kwargs)
    return wrapper

@acceptedNum
def greet(num):
    print("Hello", num)
greet(num=10)


