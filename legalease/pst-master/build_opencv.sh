#curl -L 'https://github.com/Itseez/opencv/archive/2.4.11.zip' | unzip -p -
wget 'https://github.com/Itseez/opencv/archive/2.4.11.zip'
sudo apt-get install unzip
unzip 2.4.11.zip
mkdir -p opencv-2.4.11/release
cd opencv-2.4.11/release
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D BUILD_PYTHON_SUPPORT=ON -D WITH_XINE=ON -D WITH_TBB=ON ..
make && sudo make install
sudo mv /usr/local/lib/python2.7/site-packages/cv2.so /usr/lib/python2.7/site-packages
cd /
#rm -rf opencv-2.4.11
