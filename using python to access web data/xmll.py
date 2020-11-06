import xml.etree.ElementTree as et

data = '''
    <person>
    <name>Badreddine</name>
    <phone type="intl">
        +213 652 07206
    </phone>
    <email hide="yes"/>
    </person>
'''

tree = et.fromstring(data)
print("Name : ", tree.find('name').text)
print("Attr : ", tree.find('email').get('hide'))

data = '''
<stuff>
    <users>
        <user x="2">
            <id>001</id>
            <name>Badre</name>
        </user>
        <user x="7">
            <id>009</id>
            <name>Chuck</name>
        </user>
    </users>
</stuff>
'''
stuff = et.fromstring(data)
lst = stuff.findall('users/user')
print('Usere Count : ', len(lst))
for item in lst :
    print('Name : ', item.find('name').text)
    print('Id : ', item.find('id').text)
    print('Attribute : ', item.get('x'))