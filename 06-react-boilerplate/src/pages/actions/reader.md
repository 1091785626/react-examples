
��������commomActionCreator���뵽������curActionCreator ������ʱ��Ϊ��common+cur��

actions:bindActionCreators(actions,dispath)�����ʱ��actions���ǹ��úͶ�����dispath������common+cur����


�������õ�commomActionCreator ������һ�����⣺
����:
����һ�� this.props.actions.navigator()���л�·��
����ִ�����е�reducersΪactionTypesΪ'CHANGE_PATH'ѡ��

������������˼����
1.��Ʒҳ����һ����Ʒ�� ���빺�ﳵҳ���У�����Ҫ��ʾ���ﳵҳ�������Ϊ��Ҫ���µ�״̬

�����������ӣ�cartAdd-commomActionCreator�����뵽 ��������Ʒҳ��cart-curActionCreator���γ�actions:bindActionCreators(actions,dispath)��common+cur�������ʱ��ֻ��Ҫ�ڹ��ﳵҳ���Ӧ��reducers��switchѡ���м���cartAdd-AactionType���Ϳ����ù��ﳵ�е�������ʾ�õ����£����Ǿܾ�ʹ��ȫ�ֵķ�ʽ�Ҹ����ݣ�

2.������Щ���Ƕ��������Ƿ������ǹ��ã��������AactionTypeִֻ��һ����صģ������һ���м��������һ��AactionType����curActionCreatorҲֻ��Ӧ���Ψһ��AactionType��



1.navigator��ԭ����˼��1
2.request��ԭ����˼��2



