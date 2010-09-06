chi_en = open('chi-en.txt','U').read().decode('utf-8')
# just trust me, okay?
# print chi_en
'\n\n' in chi_en
# well, it looks like there are series of newlines. how many?
chi_en.count('\n\n')
# yeah, so this is probably how the "chunks" are delimited. Gotta catch 'em all:
chunks = chi_en.split('\n\n')
# let's take a peek at a few. 
from random import choice
#print choice(chunks)
# Okay, they look alright. To make life easier, we're going to remove all the 
# internal newlines in each chunk. We'll call these entries, since that's 
# what they are
entries = [chunk.replace('\n', ' ') for chunk in chunks]
#print choice(entries)
# Yeah, now it's one long line. That's what we want.
#print choice(entries)
# O hai.
print choice(entries)

exit()
# let's save this where we are & get outta Dodge.
out = open('entries.txt','w')
for entry in entries:
 out.write(entry.encode('utf-8') + '\n')

out.close()
# bye.

