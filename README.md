# Training exercise 1 - Installing RancherDesktop

## Intro

For us to have means to create docker images, we need to have tools
installed. In this exercise you are to install RancherDesktop.

## Do

Install the appropriate version for your OS from here https://rancherdesktop.io

You can find installation guidelines here: https://docs.rancherdesktop.io/getting-started/installation

Verify from a console that running the command _docker ps_ works.

# Training exercise 2 - Docker

In this exercise you are going to dockerize your first application. Use the one
you created in the previous exercise.

## Building

Create a build with an appropriate named tag and verify that you actually now have an image with that name.
- What image did you inherit from and how is that done?
>>You inherit an image by specifying it in your Dockerfile with the FROM keyword, like FROM node:20.
- Which command is need to build and hence determine which images you have on
  your machine and thus at your disposal.
>>Command to Build: Use docker build -t <tag_name> . to build the Docker image.
## Running

You can run your newly created image in non-interactive and interactive mode. Try both. 
- What do you do to do either?
>>Non-interactive Mode: Run docker run <image_name> for non-interactive mode.
Interactive Mode: Use docker run -it <image_name> /bin/bash for interactive mode.
- When running in non-iteractive mode your console is at your disposal. Do list
the current containers and verify that yours is there.
>>Use docker ps to list the current containers and verify that yours is there.

- Most of the time you want said container discard when the container terminates, how do you do that?
>>Use the --rm flag to remove the container when it is stopped, e.g., docker run --rm <image_name>.

## Expose port

A web service is usually accessible via some port otherwise its services will be
somewhat useless. 

Expose the port on which you have created your web service, such that you can
access its services via your browser and see that it works.
- How do you expose a port such that you can access it on the host machine?
>>Use the -p flag to expose a port, e.g., docker run -p 8080:80 <image_name>.

- Is it possible to expose more than one port?
>>Yes, it is possible to expose more than one port by using the -p flag multiple times, e.g., docker run -p 8080:80 -p 8081:81 <image_name>.

## Enter a running container

Sometimes it is beneficial to enter a container, look at log files, run scripts
or programs to test, verify or simply try something. 

- What is the first obvious thing you need to do? 
>>The first obvious thing to do is to find the container ID or name using docker ps.
- Which command do you use to enter a running container?
>>Use docker exec -it <container_id> /bin/bash to enter a running container.
- Sometimes executing the command you wish to run be hand in the container can
  be very desirable, however this is usually what happens per default. So what
  could be done to get your container started and then enter it starting your
  application by hand?!
>> Custom Entry: Start the container with docker run -it <image_name> and then manually run your desired command inside the container.

## Volumes

Containers are selfcontained, however in 2 intances one would like the
container to have external access.
1. Retaining data could pertain to log files og generated data of soughts
2. It could be a directory containing source files are mounted within the
container such that changes outside are seen and processed inside.

Try to achieve both...
- What are your considerations?
>> Considerations: You need to consider the location of the files you want to mount and the location you want to mount them to inside the container.

- Are there additional valid points as why this is a good idea?
>> Additional Points: It is a good idea to use volumes to retain data and source files because it allows you to keep the data and source files even if the container is removed.
- Do you use relative or absolute paths for this to work?
>> Use absolute paths to mount volumes, e.g., docker run -v /path/to/host:/path/to/container <image_name>.


## Finally clean up

Find the images/containers that you have created and remove them. 
- Commands to figure out which container / images are available on your system
- Which commands were needed to facilitate this

>>List Containers/Images: Run docker ps -a to list containers and docker images to list images.
>>Removal Commands: Use docker rm <container_id or name> to remove containers and docker rmi <image_id or name> to remove images.
## Resources

### Intro
On a container you can set different constraints such as number of CPU cores,
amount of CPU time as well as the amount of memory available to the container
furthermore, a container can have a restart policy.


### Test app
To test and verify these we would need an app or apps. Which one? Either find
one on the net or write your own, being a script or exe file. Your choice.

### Image
Create an image, meaning create your own Dockerfile, that contains this
application(s). The image you create must be based on some base image of your
favourite Linux distro, that being Ubuntu, Slack, Fedora, etc. Add your
application(s) to the image.


Now we have our test image.

### Docker commands
Figure out which commands, using the docker cli, to facilitate the set
requirements. Describe them and how to use them.

### Testing/Verifing
Spin up the container based on our image. Either at start or update the set
requirements on the running container.

Finally explain how to actually test and verify using your app(s)/scripts,
whether they run using CMD or enter the container or ???

