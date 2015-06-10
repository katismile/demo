VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  ENV['VAGRANT_DEFAULT_PROVIDER'] = 'virtualbox'
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder "./", "/home/vagrant/src/project"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 27017, host: 1234

  config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 2
    end
end